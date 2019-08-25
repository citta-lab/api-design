const getOne = (req, res) => {
  res.send({ message: ' GET ONE Called ' })
}
const getMany = (re, res) => {
  res.send({ message: ' GET MANY Called ' })
}
const createOne = (req, res) => {
  res.send({ message: ' CREATE ONE Called ' })
}
const updateOne = (req, res) => {
  res.send({ message: ' UPDATE ONE Called ' })
}
const removeOne = (req, res) => {
  res.send({ message: ' REMOVE ONE Called ' })
}

export default { getOne, createOne, updateOne, removeOne, getMany }
