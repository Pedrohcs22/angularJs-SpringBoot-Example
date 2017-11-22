package n3m6.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import n3m6.entity.Modelo;
import n3m6.enums.Categoria;
import n3m6.service.ModeloService;

@RestController
public class ModeloRestController {

	@Autowired
	private ModeloService modeloService;
	
	@RequestMapping("/salvarModelo")
	public ResponseEntity<?> salvarModelo(@RequestBody Modelo modelo) {
		modeloService.salvar(modelo);
		return new ResponseEntity(HttpStatus.CREATED);
	}
	
	@RequestMapping("/listarModelos")
	public ResponseEntity<?> listarCategorias() {
		return new ResponseEntity(modeloService.listar(), HttpStatus.OK);
	}
}
