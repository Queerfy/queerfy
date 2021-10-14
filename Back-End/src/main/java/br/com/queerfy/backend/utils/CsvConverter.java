package br.com.queerfy.backend.utils;

import br.com.queerfy.backend.dto.UserDTO;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class CsvConverter {
    public void gravaArquivoCsv(ListaObj<UserDTO> userList, String nomeArq) {
        FileWriter arq = null;
        Formatter saida = null;
        nomeArq += ".csv";           //Acrescenta a extensão .csv no arquivo
        // Bloco para abrir o arquivo
        try{
            arq = new FileWriter(nomeArq, true); //True serve para acrescentar ao arquivo.
            saida = new Formatter(arq);
        }catch (IOException exception){
            System.out.println("Erro ao abrir o arquivo");
            System.exit(1);
        }

        //Try catch para gravar o arquivo
        try{
            for (int i = 0; i < userList.getTamanho(); i++){
                UserDTO userDTO = userList.getElemento(i);
                saida.format("%d;%s;%s;%s;%s;%s;%b\n",userDTO.getId(),
                                                        userDTO.getName(),
                                                        userDTO.getCpf(),
                                                        userDTO.getEmail(),
                                                        userDTO.getGenre(),
                                                        userDTO.getRg(),
                                                        userDTO.getAdmin());
            }
        }catch (FormatterClosedException e){
            System.out.println("Erro ao gravar arquivo!");
            System.exit(1);
        }finally {
            saida.close();
            try{
                arq.close();
            }catch (IOException e){
                System.out.println("Erro ao fechar arquivo");
            }
        }

    }
    public static void exibirArquivo(String nomeArquivo){

        FileReader arq = null;
        Scanner entrada = null;
        Boolean deuRuim = false;
        nomeArquivo += ".csv";
        try{
            arq = new FileReader(nomeArquivo);
            entrada = new Scanner(arq).useDelimiter(";|\\n");

        }catch (FileNotFoundException e){
            System.out.println("Arquivo não encontrado.");
            System.exit(1);
        }try{
            System.out.printf("%4s %-14s %-14s %-20s %-12s %-13s %-6s\n", "ID", "NOME", "CPF", "E-MAIL", "GENRE", "RG", "ADMIN");
            while (entrada.hasNext()){
                Integer id = entrada.nextInt();
                String name = entrada.next();
                String cpf = entrada.next();
                String email = entrada.next();
                String genre = entrada.next();
                String rg = entrada.next();
                Boolean admin = entrada.hasNext();

                System.out.printf("%4d %-14s %-14s %-20s %-12s %-13s %-6b\n", id, name, cpf, email, genre, rg, admin);
            }
        }catch (NoSuchElementException e){
            System.out.println("Arquivos com problemas");
            deuRuim = true;
        }catch (IllegalStateException e){
            System.out.println("Erro na leitura do qrquivo");
            deuRuim = true;
        }finally {
            entrada.close();
            try{
                arq.close();
            }catch (IOException e){
                System.out.println("Erro ao fechar arquivo");
                deuRuim = true;
            }
        }
    }


}
