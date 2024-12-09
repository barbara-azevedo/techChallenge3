

export class Post {
  _id?: string;
  titulo?: string;
  conteudo?: string;
  dtCriacao?: Date;
  dtModificacao?: Date;
  autor?: AuthorProps[];
}
export class PostSingle {
  _id?: string;
  titulo?: string;
  conteudo?: string;
  dtCriacao?: Date;
  dtModificacao?: Date;
  autor?: AuthorProps;
}

export interface PostProps {
  _id?: string;
  titulo?: string;
  conteudo?: string;
  dtCriacao?: Date;
  dtModificacao?: Date;
  autor?: AuthorProps[];
}

export interface CompletedPostProps {
  posts: Post[];
}

export class Autor {
  id?: string;
  nome?: string;
  dtCriacao?: Date;
  dtModificacao?: Date;
}

export interface AuthorProps {
  id?: string;
  nome?: string;
  dtCriacao?: Date;
  dtModificacao?: Date;
}