import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(req, res) {
  const { body } = req;
  const { url } = body;

  const plaiceHolder = await getPlaiceholder(url);

  res.status(200).send(plaiceHolder);
}
