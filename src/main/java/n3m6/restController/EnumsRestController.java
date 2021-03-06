package n3m6.restController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import n3m6.enums.Categoria;
import n3m6.enums.Tracao;

@RestController
@CrossOrigin
public class EnumsRestController {
		
		@RequestMapping(method=RequestMethod.GET ,path="/listarTracoes")
		public ResponseEntity<?> listarTracoes() {
			return new ResponseEntity(Tracao.values(), HttpStatus.OK);
		}
		
		@RequestMapping(method=RequestMethod.GET ,path="/listarCategorias")
		public ResponseEntity<?> listarCategorias() {
			return new ResponseEntity(Categoria.values(), HttpStatus.OK);
		}
}
