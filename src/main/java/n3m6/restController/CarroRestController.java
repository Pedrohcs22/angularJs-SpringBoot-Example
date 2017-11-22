package n3m6.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import n3m6.entity.Carro;
import n3m6.service.CarroService;

@RestController
@CrossOrigin
public class CarroRestController {

	@Autowired
	private CarroService carroService;
	
	@RequestMapping("/salvarCarro")
	public ResponseEntity<?> salvarCarro(@RequestBody Carro carro) {
		carroService.salvar(carro);
		return new ResponseEntity(HttpStatus.CREATED);
	}
	
	@RequestMapping("/listarCarros")
	public ResponseEntity<?> listarCarros() {
		return new ResponseEntity(carroService.listar(), HttpStatus.OK);
	}
	
	@RequestMapping("/deletarCarro/{id}")
	public ResponseEntity<?> deletarCarro(@PathVariable("id") Integer idCarro) {
		carroService.remover(idCarro);
		return new ResponseEntity(HttpStatus.OK);
	}
	
}
