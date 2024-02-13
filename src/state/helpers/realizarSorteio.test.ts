import { realizarSorteio } from "./realizarSorteio"

describe('Dado um sorteio de amigo secreto', () => {
    test('Cada participante não sorteio o própio nome', () => {
        const participantes = [
            'Ana',
            'Catarina',
            'Juliana',
            'João',
            'Vinicius',
            'Natália'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach((participante) => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})