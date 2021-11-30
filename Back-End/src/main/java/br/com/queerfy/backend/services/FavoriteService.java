package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.FavoriteDTO;
import br.com.queerfy.backend.entities.Favorite;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.FavoriteNotFound;
import br.com.queerfy.backend.exceptions.FkNotFound;
import br.com.queerfy.backend.repositories.FavoriteRepository;
import br.com.queerfy.backend.repositories.PropertyRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import br.com.queerfy.backend.utils.FilaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FavoriteService {

    @Autowired
    PropertyRepository propertyRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    FavoriteRepository favoriteRepository;

    private Integer contador = 0;

    private FilaObj<Favorite> filaObj = new FilaObj<>(99);

    public List<FavoriteDTO> getAllFavorites(){
        List<Favorite> favorites = favoriteRepository.findAll();
        favorites.forEach(favorite -> {
            filaObj.insert(favorite);
            contador++;
        });
        List<FavoriteDTO> favoritesDTO = new ArrayList<>();
        for(int i = 0; i < contador; i++){
            favoritesDTO.add(new FavoriteDTO(filaObj.poll()));
        }
        return favoritesDTO;
    }

    @Transactional
    public FavoriteDTO create(FavoriteDTO entity) throws FkNotFound {
        Optional<Property> property = propertyRepository.findById(entity.getPropertyId());
        Optional<User> user = userRepository.findById(entity.getUserId());
        if(property.isPresent() && user.isPresent()){

            Integer likes = property.get().getLikes();
            likes += 1;

            Favorite favorite = new Favorite(entity);
            favorite.setUser(user.get());
            favorite.setProperty(property.get());
            property.get().setLikes(likes);
            propertyRepository.save(property.get());
            favoriteRepository.save(favorite);
            return new FavoriteDTO(favorite);
        }
        throw new FkNotFound();
    }

    @Transactional
    public void delete(Integer id) throws FavoriteNotFound {
        boolean favorite = favoriteRepository.findById(id).isPresent();
        if(favorite){
            Integer propertyId = favoriteRepository.findById(id).get().getProperty().getid();
            Property property = propertyRepository.getById(propertyId);
            Integer likes = property.getLikes();
            likes -= 1;
            property.setLikes(likes);
            propertyRepository.save(property);
            favoriteRepository.deleteById(id);
        }
        else{
            throw new FavoriteNotFound();
        }
    }
}
