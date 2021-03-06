package n3m6.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Pattern;

import lombok.Data;
import lombok.EqualsAndHashCode;
import n3m6.enums.Categoria;
import n3m6.enums.Tracao;

@Entity
@EqualsAndHashCode(of = "id")
@SuppressWarnings("serial")
public @Data class Carro implements Serializable {

  @Id
  @GeneratedValue(generator = "carro", strategy = GenerationType.SEQUENCE)
  @SequenceGenerator(name = "carro", sequenceName = "carro_sequence", allocationSize = 1)
  private Integer id;

  @Pattern(regexp="[A-Z]{4}[0-9]{3}", message="Placa não obedece o padrão de inserção AAAA999.")
  private String placa;
  
  @ManyToOne
  private Modelo modelo ;

  @Enumerated(EnumType.STRING)
  private Tracao tracao;
  
  @Enumerated(EnumType.STRING)
  private Categoria categoria;
  
  @ManyToOne
  private Fabricante fabricante = new Fabricante();
 
  public String getFabricanteFormatado() {
	  if(fabricante != null) {
		  return fabricante.getNome() + "/" + fabricante.getPais();
	  }
	  
	  return "";
  }
}
