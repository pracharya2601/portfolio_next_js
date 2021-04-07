import portfolioData from 'pages/api/project.json';

export default (req, res) => {
  const {id} = req.query;
  const projectObj = portfolioData.project.filter((item) => item.id === id);

  res.status(200).json(projectObj[0]);
}
