import portfolioData from 'pages/api/project.json';

export default (req, res) => {
  res.status(200).json(portfolioData.project)
}
