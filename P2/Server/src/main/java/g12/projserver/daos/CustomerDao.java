package g12.projserver.daos;

import g12.projserver.models.Customer;
import g12.projserver.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerDao {
    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/findCustomers")
    public Iterable<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer findCustomerById(Integer customerId) {
        return customerRepository.findById(customerId).get();
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public void deleteCustomer(Integer customerId) {
        customerRepository.deleteById(customerId);
    }

    public Customer updateCustomer(Integer customerId, Customer updatedCustomer) {
        updatedCustomer.setCustomerId(customerId);
        return customerRepository.save(updatedCustomer);
    }
}
