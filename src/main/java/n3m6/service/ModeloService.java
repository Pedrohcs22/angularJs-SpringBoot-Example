package n3m6.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import n3m6.entity.Carro;
import n3m6.entity.Modelo;
import n3m6.repository.ModeloRepository;

@Service
public class ModeloService {

	@Autowired
	private ModeloRepository repository;

	public List<Modelo> listar() {
		return repository.findAll();
	}

	public Modelo obter(Integer id) {
		return repository.findById(id).get();
	}

	@Transactional
	public Modelo salvar(Modelo carro) {
		return repository.save(carro);
	}

	@Transactional
	public void remover(Integer id) {
		repository.deleteById(id);
	}
	
	public Modelo getByDescricao(String descricao) {
		return repository.getByDescricao(descricao);
	}
}
