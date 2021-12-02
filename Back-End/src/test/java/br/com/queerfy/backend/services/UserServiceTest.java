package br.com.queerfy.backend.services;

import br.com.queerfy.backend.builder.UserBuilder;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
	
	@InjectMocks
	private UserService service;
	
	@Mock
	private UserRepository repository;
	
	private User userModel;
	
	@BeforeEach
	void setup() {
		userModel = UserBuilder.toUserModel();
	}
	
	@Test
	void whenListUserIsCalledThenReturnListOfUsers() {
		when(repository.findAll()).thenReturn(UserBuilder.toUserModelList());
		
		List<UserDTO> listUsers = service.getUsers();
		
		assertFalse(listUsers.isEmpty());
		assertTrue(listUsers.get(0).equals(new UserDTO(userModel)));
	}
	
	@Test
	void whenGetUserByIdIsCalledThenReturnRequiredUser() throws UserNotFoundException {
		when(repository.findById(1)).thenReturn(Optional.of(userModel));
		
		UserDTO userDTO = service.getUserById(1);
		
		assertEquals(userDTO, new UserDTO(userModel));
	}
	
	@Test
	void whenAuthenticateUserIsCalledThenReturnAuthenticatedUser() throws UserNotFoundException {
		when(repository.findAll()).thenReturn(UserBuilder.toUserModelList());
		
		UserDTO userDTO = service.autenticateUser(UserBuilder.toUserDTO());
		
		assertTrue(userDTO.getAutenticated());
	}
	
	@Test
	void whenAuthenticateUserIsCalledWithWrongCredentialsThenReturnError() {
		when(repository.findAll()).thenReturn(UserBuilder.toUserModelList());
		
		UserDTO userWithWrongCredentials = UserBuilder.toUserDTO();
		userWithWrongCredentials.setPassword("1");
		
		assertThrows(UserNotFoundException.class, () -> {
			service.autenticateUser(userWithWrongCredentials);
		});
	}
	
	@Test
	void whenLogoffUserIsCalledThenReturnStatusOk() throws UserNotFoundException {
		when(repository.findById(1)).thenReturn(Optional.of(userModel));
		
		String message = service.logoffUser(1);
		
		assertEquals(message, "José disconected successfully");
	}
	
	@Test
	void whenLogoffUserIsCalledWithNonExistentIdThenReturnError() {
		when(repository.findById(1)).thenReturn(Optional.empty());
		
		assertThrows(UserNotFoundException.class, () -> {
			service.logoffUser(1);
		});
	}


	
	@Test
	void whenUpdateUserIsCalledThenReturnUpdatedUser() throws UserNotFoundException {
		UserDTO userChanged = UserBuilder.toUserDTO();
		userChanged.setName("Maria");
		
		when(repository.findById(1)).thenReturn(Optional.of(userModel));
		
		UserDTO userDTO = service.update(userChanged, 1);
		
		assertEquals(userChanged.getName(), userDTO.getName());
	}
	
	@Test
	void whenUpdateUserNonExistentThenReturnError() {
		UserDTO userChanged = UserBuilder.toUserDTO();
		userChanged.setName("Maria");
		
		when(repository.findById(1)).thenReturn(Optional.empty());
		
		assertThrows(UserNotFoundException.class, () -> {
			service.update(userChanged, 1);
		});
	}
	
}
