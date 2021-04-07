import portfolioData from './project.json';

export default (req, res) => {
  const projectID = req.query.projectId;
  const projectObj = portfolioData.project.filter((item) => item.id === projectID);

  res.status(200).json(projectObj[0]);
}
