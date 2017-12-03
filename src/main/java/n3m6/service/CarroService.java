package n3m6.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import n3m6.entity.Carro;
import n3m6.repository.CarroRepository;

@Service
public class CarroService {

  @Autowired
  private CarroRepository repository;

  public List<Carro> listar() {
    return repository.findAll();
  }

  public Carro obter(Integer id) {
    return repository.findById(id).get();
  }

  @Transactional
  public Carro salvar(Carro carro) {
    return repository.save(carro);
  }

  @Transactional
  public void remover(Integer id) {
    repository.deleteById(id);
  }

  @Transactional
  public Integer countByPlacaLike(String placa) {
	  return repository.countByPlacaLike(placa);
  }
  
  @Transactional
  public Integer countByPlacaLikeAndIdNot(String placa, Integer id) {
	  return repository.countByPlacaLikeAndIdNot(placa, id);
  }
  
  @Transactional
  public Carro getByPlaca(String placa) {
	  return repository.getByPlaca(placa);
  }
  
  @Transactional
  public long count() {
	  return repository.count();
  }
}
