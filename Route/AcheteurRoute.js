const express = require("express");
const acheteur = require("../Controller/BoxController");

const router = express.Router();


router.get('/all', acheteur.acheteurList);
router.get('/filter', acheteur.acheteurFilter);
router.post('/store', acheteur.acheteurStore);
router.delete('/:idacheteur', acheteur.acheteurDelete);
router.put('/:idacheteur', acheteur.acheteurUpdate);
module.exports = router;