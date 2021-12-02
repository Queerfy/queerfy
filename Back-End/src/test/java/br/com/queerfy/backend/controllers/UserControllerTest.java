package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.builder.UserBuilder;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.services.UserService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import java.util.List;

import static br.com.queerfy.backend.utils.JsonConvertionUtils.asJsonString;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class UserControllerTest {
	
	private static final String USERS_PATH = "/users";
	
	private MockMvc mockMvc;
	
	@Mock
	private UserService service;
	
	@InjectMocks
	private UserController controller;
	
	@BeforeEach
	void setup() {
		mockMvc = MockMvcBuilders.standaloneSetup(controller)
				.setCustomArgumentResolvers(new PageableHandlerMethodArgumentResolver())
				.setViewResolvers((s, locale) -> new MappingJackson2JsonView())
				.build();
	}
	
	@Test
	void whenFindAllUsersIsCalledThenReturnList() throws Exception {
		List<UserDTO> list = UserBuilder.toUserDTOList();
		
		when(service.getUsers()).thenReturn(list);
		
		mockMvc.perform(MockMvcRequestBuilders.get(USERS_PATH))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray())
				.andExpect(jsonPath("$", Matchers.hasSize(2)));
	}

	
	@Test
	void whenAuthenticateUserIsCalledThenReturnUserAuthenticated() throws Exception {
		UserDTO userAutenticated = UserBuilder.toUserDTO();
		userAutenticated.setAutenticated(true);
		
		when(service.autenticateUser(UserBuilder.toUserDTO())).thenReturn(userAutenticated);
		
		mockMvc.perform(MockMvcRequestBuilders.post(USERS_PATH + "/autenticate")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(UserBuilder.toUserDTO())))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.autenticated", is(true)));
	}
	
	@Test
	void whenLogoffUserIsCalledThenReturnUserUnauthenticated() throws Exception {
		UserDTO user = UserBuilder.toUserDTO();
		
		when(service.logoffUser(1)).thenReturn(String.format("%s disconected successfully", user.getName()));
		
		mockMvc.perform(MockMvcRequestBuilders.post(USERS_PATH + "/logoff/1"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", is("José disconected successfully")));
	}
	
	@Test
	void whenUpdateUserIsCalledThenReturnUserUpdated() throws Exception {
		UserDTO userChanged = UserBuilder.toUserDTO();
		userChanged.setName("Paulo");
		
		when(service.update(userChanged, 1)).thenReturn(userChanged);
		
		mockMvc.perform(MockMvcRequestBuilders.put(USERS_PATH + "/update/1")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJsonString(userChanged)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.name", is("Paulo")));
	}
}
