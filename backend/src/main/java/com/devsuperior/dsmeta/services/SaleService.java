package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.exceptions.ResourceNotFoundException;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	public Sale findById(Long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("There is no sale for this ID: " + id));
	}
	
	public List<Sale> findAll() {
		return repository.findAll();
	}
	
	public Sale save(Sale sale) {
		return repository.save(sale);
	}
	
	public Sale update(Sale sale) {
		return repository.save(sale);
	}
	
	public void deleteById(Long id) {
		repository.deleteById(id);
	}
}
