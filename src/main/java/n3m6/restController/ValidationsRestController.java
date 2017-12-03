package n3m6.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import n3m6.service.CarroService;

@RestController
@CrossOrigin
public class ValidationsRestController {

	@Autowired
	private CarroService carroService;

	@RequestMapping(method = RequestMethod.GET, path = "/isPlacaRepetida/{placa}")
	public ResponseEntity<?> isPlacaRepetida(@PathVariable("placa") String placa) {
		return validar(placa, "");
	}

	@RequestMapping(method = RequestMethod.GET, path = "/isPlacaRepetida/{placa}/{id}")
	public ResponseEntity<?> isPlacaRepetida(@PathVariable("placa") String placa, @PathVariable("id") String id) {
		return validar(placa, id);
	}

	private ResponseEntity<?> validar(String placa, String id) {
		boolean possuiPlacasRepetidas;

		if (id != null && !id.isEmpty()) {
			possuiPlacasRepetidas = carroService.countByPlacaLikeAndIdNot(placa, Integer.parseInt(id)) > 0;
		} else {
			possuiPlacasRepetidas = carroService.countByPlacaLike(placa) > 0;
		}

		return new ResponseEntity(possuiPlacasRepetidas, HttpStatus.OK);
	}
}
