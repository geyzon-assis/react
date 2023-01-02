import Titulo from '../../components/Titulo'

export default function utilizandoTitulo() {
  return (
    <>
      <Titulo
        principal="Pagina de cadastro"
        secundario="Incluir, alterar e excluir cadastro de usuario"
      />
      <br />
      <Titulo
        principal="Texto principal que deve aparecer como paragrafo afhaifhasi aifhsaifhai"
        secundario="Continuação do texto aasfafoafjoafjoj aof asojfsa"
        small={true}
      />
    </>
  )
}