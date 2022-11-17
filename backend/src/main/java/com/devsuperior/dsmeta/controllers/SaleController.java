package com.devsuperior.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;

@RestController
@RequestMapping("/sale")
public class SaleController {

	@Autowired
	private SaleService service;
	
	public List<Sale> findAll() {
		return service.findAll();
	}
	
	@GetMapping(value = "/{id}")
	public Sale findById(@PathVariable(name = "id") Long id) {
		return service.findById(id);
	}
	
	@PostMapping
	public Sale save(@RequestBody Sale sale) {
		return service.save(sale);
	}
	
	@PutMapping
	public Sale update(@RequestBody Sale sale) {
		return service.update(sale);
	}
	
	@DeleteMapping(value = "/{id}")
	public void deleteById(@PathVariable(name = "id") Long id) {
		service.deleteById(id);
	}
	
	@GetMapping
	public Page<Sale> findAllByDates(
			@RequestParam(value="minDate", defaultValue = "") String minDate,
			@RequestParam(value="maxDate", defaultValue = "") String maxDate,
			Pageable pageable) {
		return service.findAllByDates(minDate, maxDate, pageable);
	}
}
