package br.com.queerfy.backend;

import br.com.queerfy.backend.controllers.FavoriteController;
import br.com.queerfy.backend.controllers.LeaseController;
import br.com.queerfy.backend.controllers.PropertyController;
import br.com.queerfy.backend.controllers.UserController;
import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.Favorite;
import br.com.queerfy.backend.entities.Lease;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.FavoriteRepository;
import br.com.queerfy.backend.repositories.LeaseRepository;
import br.com.queerfy.backend.repositories.PropertyRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class BackendApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	private FavoriteController favoriteController;
	@MockBean
	private FavoriteRepository favoriteRepository;

	@Autowired
	private LeaseController leaseController;
	@MockBean
	private LeaseRepository leaseRepository;

	@Autowired
	private PropertyController propertyController;
	@MockBean
	private PropertyRepository propertyRepository;

	@Autowired
	private UserController userController;
	@MockBean
	private UserRepository userRepository;
	ResponseEntity responseEntity;

	@Test
	void findAllShouldReturnAllUsers() {
		List<User> listaUserMock = List.of(mock(User.class), mock(User.class));
		when(userRepository.findAll()).thenReturn(listaUserMock);
		List<User> listaUser = userRepository.findAll();
		Assertions.assertEquals(listaUser, listaUserMock);
	}

	@Test
	void findAllPropertiesShouldReturnAllProperties(){
		List<Property> listPropertyMock = List.of(mock(Property.class), mock(Property.class));
		when(propertyRepository.findAll()).thenReturn(listPropertyMock);
		List<Property> listaProperty = propertyRepository.findAll();
		Assertions.assertEquals(listPropertyMock, listaProperty);
	}

	@Test
	void findAllLeasesShouldReturnAllLeases(){
		List<Lease> listLeaseMock = List.of(mock(Lease.class), mock(Lease.class));
		when(leaseRepository.findAll()).thenReturn(listLeaseMock);
		List<Lease> listaLease = leaseRepository.findAll();
		Assertions.assertEquals(listLeaseMock, listaLease);
	}

	@Test
	void findAllFavoriteShouldReturnAllFavorites(){
		List<Favorite> listFavoritemock = List.of(mock(Favorite.class), mock(Favorite.class));
		when(favoriteRepository.findAll()).thenReturn(listFavoritemock);
		List<Favorite> listFavorite = favoriteRepository.findAll();
		Assertions.assertEquals(listFavoritemock, listFavorite);
	}

	@Test
	void getUserByIdShouldReturnUserWhenUserIdExists(){
		User user = new User();
		when(userRepository.findById(1)).thenReturn(java.util.Optional.of(user)).getMock();
		User userOptional = userRepository.findById(1).get();
		Assertions.assertEquals(userOptional, user);

	}

	@Test
	void getPropertyShouldReturnPropertyWhenIdExists(){
		Property property = new Property();
		when(propertyRepository.findById(1)).thenReturn(java.util.Optional.of(property)).getMock();
		Property propertyOptional = propertyRepository.findById(1).get();
		Assertions.assertEquals(propertyOptional, property);

	}


}
