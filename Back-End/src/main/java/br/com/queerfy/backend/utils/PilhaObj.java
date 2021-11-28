package br.com.queerfy.backend.utils;

public class PilhaObj<T> {

    private Integer topo;
    private T[] pilha;

    public PilhaObj(Integer capacidadePilha) {
        this.pilha = (T[]) new Object[capacidadePilha];
        topo = -1;
    }

    public boolean isEmpty() {
        return topo == -1;
    }

    public boolean isFull() {
        return topo == pilha.length-1;
    }

    public void push(T info) {
        if (isFull()) {
            System.out.println("\nPilha cheia");
        } else {
            pilha[++topo] = info;
        }
    }

    public T pop() {
        if (isEmpty()) {
            return null;
        }
        return pilha[topo--];
    }

    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return pilha[topo];
    }

    public void exibe() {
        if (isEmpty()) {
            System.out.println("\nPilha vazia");
        } else {
            System.out.println("\nExibindo a pilha: ");
            for (Integer c = topo; c >= 0; c--) {
                System.out.println(pilha[c]);
            }
        }
    }
}
