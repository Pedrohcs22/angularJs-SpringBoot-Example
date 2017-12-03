package n3m6.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import n3m6.entity.Fabricante;
import n3m6.service.FabricanteService;

@RestController
public class FabricanteRestController {

	@Autowired
	private FabricanteService fabricanteService;
	
	@RequestMapping(method=RequestMethod.POST, path="/fabricantes")
	public ResponseEntity<?> salvarFabricante(@RequestBody Fabricante fabricante) {
		fabricanteService.salvar(fabricante);
		return new ResponseEntity(HttpStatus.CREATED);
	}
	
	@RequestMapping(method=RequestMethod.GET, path="/fabricantes")
	public ResponseEntity<?> listarFabricantes() {
		return new ResponseEntity(fabricanteService.listar(), HttpStatus.OK);
	}
}
