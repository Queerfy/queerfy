import {
  AdditionalComments,
  Comment,
  NameDate,
  Picture,
  Profile,
} from './styles';

export const CommentsHouse = () => {
  return (
    <AdditionalComments>
      <Profile>
        <Picture
          src="https://github.com/CarolinaScudeler.png"
          alt="Imagem do perfil"
        ></Picture>

        <NameDate>
          <h2>Nome do hóspede</h2>
          <p>setembro de 2021</p>
        </NameDate>
      </Profile>

      <Comment>
        Ótima localização, conforto extraordinário, ambiente tranquilo e
        organizado, proprietário muito amigável e receptivo, não tive nenhum
        problema
      </Comment>
    </AdditionalComments>
  );
};
