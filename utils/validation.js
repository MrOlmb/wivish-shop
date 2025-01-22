import * as Yup from 'yup';

export const logInSchema = Yup.object().shape({
  email: Yup.string().required('L\'adresse e-mail est obligatoire').email('Veuillez entrer une adresse e-mail valide'),
  password: Yup.string().required('Veuillez entrer votre mot de passe').min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Veuillez entrer un nom de compte').min(3, 'Le nom de compte doit contenir au moins 3 caractères'),
  email: Yup.string().required('L\'adresse e-mail est obligatoire').email('Veuillez entrer une adresse e-mail valide'),
  password: Yup.string().required('Veuillez entrer votre mot de passe').min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  confirmPassword: Yup.string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas'),
});

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('Le nom de la catégorie ne peut pas être vide'),
  slug: Yup.string().required('Le nom du chemin ne peut pas être vide'),
  image: Yup.string()
    .required('Veuillez entrer une URL d\'image')
    .url('URL d\'image invalide')
    .matches(/\.(gif|jpe?g|png|webp)$/i, 'L\'URL de l\'image doit être une URL d\'image valide'),
});

export const bannerSchema = Yup.object().shape({
  title: Yup.string().required('Le nom ne peut pas être vide'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Veuillez entrer une URL d\'image')
      .url('URL invalide')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'L\'URL de l\'image doit être une URL d\'image valide'),
  }),
});

export const sliderSchema = Yup.object().shape({
  title: Yup.string().required('Le nom ne peut pas être vide'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Veuillez entrer une URL d\'image')
      .url('URL invalide')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'L\'URL de l\'image doit être une URL d\'image valide'),
  }),
});

export const reviewSchema = Yup.object().shape({
  title: Yup.string().required('Le titre de l\'avis ne peut pas être vide').min(4, 'Le titre de l\'avis doit contenir au moins 4 caractères'),
  comment: Yup.string().required('Le texte de l\'avis ne peut pas être vide').min(4, 'Le texte de l\'avis doit contenir au moins 4 caractères'),
});

export const addressSchema = Yup.object().shape({
  province: Yup.object().shape({
    name: Yup.string().required('Veuillez sélectionner votre province de résidence'),
  }),
  city: Yup.object().shape({
    name: Yup.string().required('Veuillez sélectionner votre ville de résidence'),
  }),
  area: Yup.object().shape({
    name: Yup.string().required('Veuillez sélectionner votre district de résidence'),
  }),
  street: Yup.string().required('Le nom de la rue ne peut pas être vide'),
  postalCode: Yup.string().required('Veuillez entrer votre code postal'),
});

export const nameSchema = Yup.object().shape({
  name: Yup.string().required('Le nom doit être enregistré').min(3, 'Le nom doit contenir plus de 3 caractères'),
});

export const mobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Le numéro de téléphone doit être enregistré')
    .min(11, 'Le numéro de téléphone doit contenir 11 chiffres')
    .max(11, 'Le numéro de téléphone doit contenir 11 chiffres'),
});