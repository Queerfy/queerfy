package br.com.queerfy.backend.utils;

import br.com.queerfy.backend.dto.PropertyDTO;
import org.springframework.stereotype.Component;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class TxtConverter {

    public void gravaRegistro(String nomeArq, String registro) {
        BufferedWriter saida = null;

        try {
            saida = new BufferedWriter (new FileWriter(nomeArq, true));
        }
        catch (IOException erro) {
            System.out.println("Erro na abertura do arquivo: " +
                    erro.getMessage());
        }

        try {
            assert saida != null;
            saida.append(registro).append("\n");
            saida.close();
        }
        catch (IOException erro) {
            System.out.println("Erro na gravação do arquivo: " +
                    erro.getMessage());
        }
    }

    public void gravaArquivoTxt(List<PropertyDTO> lista, String nomeArq) {

        int contaRegistro = 0;

        String header = "PROPERTIES";
        Date dataDeHoje = new Date();
        SimpleDateFormat formataData =
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        header += formataData.format(dataDeHoje);
        header += "01";

        gravaRegistro(nomeArq, header);

        String corpo;

        for (PropertyDTO property : lista) {
            corpo = "02";
            corpo += String.format("%03d", property.getId());
            corpo += String.format("%-30.30s", property.getName());
            corpo += String.format("%-50.50s", property.getDescription());
            corpo += String.format("%-20.05b", property.getActive());
            corpo += String.format("%-20.2f", property.getDailyPrice());
            corpo += String.format("%-10.10s", property.getFilterDate());
            corpo += String.format("%-20.30s", property.getLatitude());
            corpo += String.format("%-20.30s", property.getLongitude());
            corpo += String.format("%05d", property.getLikes());
            corpo += String.format("%-20.20s", property.getState());
            corpo += String.format("%-20.20s", property.getCity());
            corpo += String.format("%-20.03s", property.getUf());
            corpo += String.format("%-20.10s", property.getCep());
            corpo += String.format("%-30.50s", property.getStreet());
            corpo += String.format("%-20.04s", property.getHouseNumber());
            corpo += String.format("%-20.50s", property.getAddressComplement());
            corpo += String.format("%-50.50s", property.getReferencePoint());
            corpo += String.format("%-20.15s", property.getPropertyType());
            corpo += String.format("%-20.15s", property.getSpaceType());
            corpo += String.format("%-10.03s", property.getGuestsQuantity());
            corpo += String.format("%-10.03s", property.getBedsQuantity());
            corpo += String.format("%-10.03s", property.getRoomQuantity());
            corpo += String.format("%-10.03s", property.getBathroomQuantity());
            corpo += String.format("%-10.05b", property.getHaveWifi());
            corpo += String.format("%-10.05b", property.getHaveKitchen());
            corpo += String.format("%-10.05b", property.getHaveSuite());
            corpo += String.format("%-10.05b", property.getHaveGarage());
            corpo += String.format("%-10.05b", property.getHaveAnimals());

            gravaRegistro(nomeArq,corpo);
            contaRegistro++;
        }

        String trailer = "01";
        trailer += String.format("%010d", contaRegistro);
        gravaRegistro(nomeArq,trailer);
    }

    public List<PropertyDTO> leArquivoTxt(String nomeArq) {
        BufferedReader entrada = null;

        String registro, tipoRegistro, name, description, filterDate, latitude, longitude, state, city, uf, cep,
                street, houseNumber, addressComplement, referencePoint, propertyType,
                spaceType, guestsQuantity, bedsQuantity, roomQuantity, bathroomQuantity;
        boolean active, haveWifi, haveKitchen, haveSuite, haveGarage, haveAnimals;
        int id, likes, qtdRegGravados, contaRegDados = 0;
        double dailyPrice;

        List<PropertyDTO> listaLida = new ArrayList<>();

        try {
            entrada = new BufferedReader(new FileReader(nomeArq));
        }
        catch (IOException erro) {
            System.out.println("Erro na abertura do arquivo: " +
                    erro.getMessage());
        }

        try {
            assert entrada != null;
            registro = entrada.readLine();

            while (registro != null) {

                tipoRegistro = registro.substring(0,2);

                if (tipoRegistro.equals("00")) {
                    System.out.println("Eh um header");
                    System.out.println("Tipo do arquivo: " + registro.substring(2,6));
                    System.out.println("Ano/semestre: " + registro.substring(6,11));
                    System.out.println("Data e hora de gravação: " + registro.substring(11,30));
                    System.out.println("Versão do documento: " + registro.substring(30,32));
                }
                else if (tipoRegistro.equals("01")) {
                    System.out.println("Eh um trailer");

                    qtdRegGravados = Integer.parseInt(registro.substring(2,12));

                    if (qtdRegGravados == contaRegDados) {
                        System.out.println("Quantidade de registros lidos compatível com quantidade de registros gravados");
                    }
                    else {
                        System.out.println("Quantidade de registros lidos incompatível com quantidade de registros gravados");
                    }
                }
                else if (tipoRegistro.equals("02")) {
                    System.out.println("Eh um registro de corpo");

                    id = Integer.parseInt(registro.substring(3, 6));
                    name = registro.substring(7, 36).trim();
                    description = registro.substring(37, 86).trim();
                    active = Boolean.valueOf(registro.substring(87, 88).trim());
                    dailyPrice = Double.valueOf(registro.substring(89, 98).replace(',','.'));
                    filterDate = registro.substring(99, 108).trim();
                    latitude = registro.substring(109, 138).trim();
                    longitude = registro.substring(139, 168).trim();
                    likes = Integer.parseInt(registro.substring(169, 174));
                    state = registro.substring(175, 194).trim();
                    city = registro.substring(195, 214).trim();
                    uf = registro.substring(215, 218).trim();
                    cep = registro.substring(219, 228).trim();
                    street = registro.substring(229, 288).trim();
                    houseNumber = registro.substring(289, 293).trim();
                    addressComplement = registro.substring(294, 343).trim();
                    referencePoint = registro.substring(344, 393).trim();
                    propertyType = registro.substring(394, 403).trim();
                    spaceType = registro.substring(404, 418).trim();
                    guestsQuantity = registro.substring(419, 422).trim();
                    bedsQuantity = registro.substring(423, 426).trim();
                    roomQuantity = registro.substring(427, 430).trim();
                    bathroomQuantity = registro.substring(431, 434).trim();
                    haveWifi = Boolean.valueOf(registro.substring(435, 436).trim());
                    haveKitchen = Boolean.valueOf(registro.substring(437, 438).trim());
                    haveSuite = Boolean.valueOf(registro.substring(439, 440).trim());
                    haveGarage = Boolean.valueOf(registro.substring(441, 442).trim());
                    haveAnimals = Boolean.valueOf(registro.substring(443, 444).trim());

                    PropertyDTO property = new PropertyDTO(id, name, description, active, dailyPrice, filterDate, latitude,
                            longitude, likes, state, city, uf , cep, street, houseNumber, addressComplement,
                            referencePoint, propertyType, spaceType, guestsQuantity, bedsQuantity, roomQuantity,
                            bathroomQuantity, haveWifi, haveKitchen, haveSuite, haveGarage, haveAnimals);

                    listaLida.add(property);

                    contaRegDados++;
                }
                else {
                    System.out.println("Tipo de registro inválido");
                }

                registro = entrada.readLine();
            }

            entrada.close();
        }
        catch (IOException erro) {
            System.out.println("Erro ao ler arquivo: " + erro.getMessage());
        }

        System.out.println("\nConteúdo lido do arquivo:");
        for (PropertyDTO a : listaLida) {
            System.out.println(a);
        }

        return listaLida;
    }
}
