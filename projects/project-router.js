const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects.' });
        });
});

router.post("/", (req, res) => {
    const project = req.body;
    Projects.addProjects(project)
        .then(newProject => {
            res.status(201).json({ created: newProject });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create project" });
        });
});

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    Projects.getProjectTasks(id)
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks.' });
        });
});

module.exports = router;