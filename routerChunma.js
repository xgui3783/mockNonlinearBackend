const router = require('express').Router()

const uploadResp = {
  "fileName": "colin27_t1_tal_lin_mask.nii.gz",
  "fileSize": 85471,
  "fileSizeUncompressed": 14218626,
  "uploaded": "2019-06-03T14:30:47.756927Z",
  "nifti": {
    "niftiVersion": "Nifti1",
    "byteOrder": "LITTLE_ENDIAN",
    "size": [
      181,
      217,
      181
    ],
    "voxelSize": [
      1,
      1,
      1
    ],
    "spatialUnits": "Millimeter",
    "temporalUnits": "Seconds",
    "dataType": "signed_short",
    "description": "mnc2nii minc2/colin27_t1_tal_lin_mask.mnc nifti/colin27_t1_tal_lin_mask.nii",
    "coordinateSystem": "SCANNER_ANAT",
    "affineMatrix": [
      [
        1,
        0,
        0,
        -90
      ],
      [
        0,
        1,
        0,
        -126
      ],
      [
        0,
        0,
        1,
        -72
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  "data": {
    "minValue": "0",
    "maxValue": "1"
  },
  "neuroglancer": {
    "type": "segmentation",
    "data_type": "uint16",
    "size": [
      181,
      217,
      181
    ],
    "resolution": [
      1000000,
      1000000,
      1000000
    ],
    "transform": [
      [
        1,
        0,
        0,
        -90500000
      ],
      [
        0,
        1,
        0,
        -126500000
      ],
      [
        0,
        0,
        1,
        -72500000
      ],
      [
        0,
        0,
        0,
        1
      ]
    ]
  },
  "warnings": []
}

router.get('/list', (req, res) => {
  res.status(200).json([])
})

router.post('/upload', (req, res) => {
  setTimeout(() => {
    res.status(200).json(uploadResp)
  }, 1000)
})

router.post('/preflight', (req, res) => {
  res.status(200).json(uploadResp)
})

module.exports = router