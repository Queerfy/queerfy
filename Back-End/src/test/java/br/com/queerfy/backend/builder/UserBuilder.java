package br.com.queerfy.backend.builder;

import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.User;

import java.util.List;
import java.util.stream.Collectors;

public class UserBuilder {
	
	public static UserDTO toUserDTO() {
		UserDTO userDTO = new UserDTO(1, "José", "111.111.111-11", "jose@gmail.com", "M", "11.111.111-1", false, false, false);
		userDTO.setPassword("1234");
		
		return userDTO;
	}
	
	public static User toUserModel() {
		return new User(toUserDTO());
	}
	
	public static List<User> toUserModelList() {
		User userAlternative = toUserModel();
		userAlternative.setId(2);
		
		return List.of(toUserModel(), userAlternative);
	}
	
	public static List<UserDTO> toUserDTOList() {
		return toUserModelList().stream().map(UserDTO::new).collect(Collectors.toList());
	}
}
