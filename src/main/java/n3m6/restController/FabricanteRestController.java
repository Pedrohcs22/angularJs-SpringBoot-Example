package n3m6.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import n3m6.entity.Fabricante;
import n3m6.service.FabricanteService;

@RestController
public class FabricanteRestController {

	@Autowired
	private FabricanteService fabricanteService;
	
	@RequestMapping("/salvarFabricante")
	public ResponseEntity<?> salvarFabricante(@RequestBody Fabricante fabricante) {
		fabricanteService.salvar(fabricante);
		return new ResponseEntity(HttpStatus.CREATED);
	}
}
