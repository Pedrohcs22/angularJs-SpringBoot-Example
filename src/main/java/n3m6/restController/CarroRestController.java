package n3m6.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import n3m6.entity.Carro;
import n3m6.service.CarroService;
import n3m6.service.FabricanteService;
import n3m6.service.ModeloService;

@RestController
@CrossOrigin
@SuppressWarnings({ "unchecked", "rawtypes" })
public class CarroRestController {

	@Autowired
	private CarroService carroService;
	
	@Autowired
	private ModeloService modeloService;
	
	@Autowired
	private FabricanteService fabricanteService;
	
	@RequestMapping(method=RequestMethod.POST, path="/carros")
	public ResponseEntity<?> salvarCarro(@RequestBody Carro carro) {
		
		if(carro.getFabricante().getId() == null) {
			fabricanteService.salvar(carro.getFabricante());
		}
		
		if(carro.getModelo().getId() == null) {
			modeloService.salvar(carro.getModelo());
		}
		
		carroService.salvar(carro);
		return new ResponseEntity(HttpStatus.CREATED);
	}
	
	@RequestMapping(method=RequestMethod.GET, path="/carros")
	public ResponseEntity<?> listarCarros() {
		return new ResponseEntity(carroService.listar(), HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, path="/carros/{id}")
	public ResponseEntity<?> deletarCarro(@PathVariable("id") Integer idCarro) {
		carroService.remover(idCarro);
		return new ResponseEntity(HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.GET, path="/carros/{id}")
	public ResponseEntity<?> retrieveCarro(@PathVariable("id") Integer idCarro) {
		Carro car = carroService.obter(idCarro);
		return new ResponseEntity(car, HttpStatus.OK);
	}
	
}
