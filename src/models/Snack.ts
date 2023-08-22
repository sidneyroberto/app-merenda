export type Snack = {
  id: string
  title: string
  description: string
  thumbURL: string
}

export type SnackNotPublishedYet = {
  message: string
}

export const getSnack = async (obj: any) => {
  const { _id, title, description, thumbURL } = obj

  const snack: Snack = { id: _id, title, description, thumbURL }
  return snack
}
