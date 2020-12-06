import { HomeFormReponse, HomeFormTreeResponse } from "types";

export const homeFormSubmitTree: HomeFormTreeResponse = {
  name: "KGBHTS",
  children: [
    {
      parameters: [
        {
          name: "Interlocks",
          value: [],
          availableValues: [
            {
              name: "Robot1",
              type: "String",
              multiSelect: false,
              value: [
                "111010R01",
                "111020R01",
                "111025R01",
                "111030R01",
                "111030R02",
                "111040R01",
                "111045R01",
                "121060R01",
              ],
            },
            {
              name: "Robot2",
              type: "String",
              multiSelect: false,
              value: [
                "111010R01",
                "111020R01",
                "111025R01",
                "111030R01",
                "111030R02",
                "111040R01",
                "111045R01",
                "121060R01",
              ],
            },
          ],
        },
      ],
      children: [
        {
          parameters: [],
          children: [
            {
              parameters: [],
              children: [],
              name: "11HP",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "111010R01",
                },
              ],
              name: "111010",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111011BH1VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111011BH1VI1KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111011BH1VI1KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111011BH1VI1KKP13",
                        },
                      ],
                      name: "111011BH1VI1",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "111011BH1SFN1",
                    },
                  ],
                  name: "111011BH1",
                },
              ],
              name: "111011",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111012BH1VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111012BH1VI1KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111012BH1VI1KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111012BH1VI1KKP13",
                        },
                      ],
                      name: "111012BH1VI1",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "111012BH1SFN1",
                    },
                  ],
                  name: "111012BH1",
                },
              ],
              name: "111012",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111013BH1VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111013BH1VI1KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111013BH1VI1KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111013BH1VI1KKP13",
                        },
                      ],
                      name: "111013BH1VI1",
                    },
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111013BH1VI2KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111013BH1VI2KKP13",
                        },
                      ],
                      name: "111013BH1VI2",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "111013BH1SFN1",
                    },
                  ],
                  name: "111013BH1",
                },
              ],
              name: "111013",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [],
                      name: "111015BH1VI1",
                    },
                  ],
                  name: "111015BH1",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [],
                      name: "111015BH2VI1",
                    },
                  ],
                  name: "111015BH2",
                },
              ],
              name: "111015",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "111020R01",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP13",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP14",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP15",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP16",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01VI1KKP17",
                        },
                      ],
                      name: "111020V01VI1",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 11,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE11a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE11b",
                        },
                      ],
                      name: "111020V01BGE11",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 12,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE12a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE12b",
                        },
                      ],
                      name: "111020V01BGE12",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 13,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE13a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE13b",
                        },
                      ],
                      name: "111020V01BGE13",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 14,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE14a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE14b",
                        },
                      ],
                      name: "111020V01BGE14",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 15,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE15a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE15b",
                        },
                      ],
                      name: "111020V01BGE15",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 16,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE16a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE16b",
                        },
                      ],
                      name: "111020V01BGE16",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 17,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE17a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGE17b",
                        },
                      ],
                      name: "111020V01BGE17",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT11a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT11b",
                        },
                      ],
                      name: "111020V01BGT11",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT12a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT12b",
                        },
                      ],
                      name: "111020V01BGT12",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT13a",
                        },
                      ],
                      name: "111020V01BGT13",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT14a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT14b",
                        },
                      ],
                      name: "111020V01BGT14",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT15a",
                        },
                      ],
                      name: "111020V01BGT15",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT16a",
                        },
                      ],
                      name: "111020V01BGT16",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT17a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT17b",
                        },
                      ],
                      name: "111020V01BGT17",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT18a",
                        },
                      ],
                      name: "111020V01BGT18",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT19a",
                        },
                      ],
                      name: "111020V01BGT19",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT20a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020V01BGT20b",
                        },
                      ],
                      name: "111020V01BGT20",
                    },
                  ],
                  name: "111020V01",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB1VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB1VI1KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB1VI1KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB1VI1KKP13",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB1VI1KKP14",
                        },
                      ],
                      name: "111020SB1VI1",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "111020SB1SFN1",
                    },
                  ],
                  name: "111020SB1",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB2VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB2VI1KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB2VI1KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB2VI1KKP13",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111020SB2VI1KKP14",
                        },
                      ],
                      name: "111020SB2VI1",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "111020SB2SFN1",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "111020SB2SFN2",
                    },
                  ],
                  name: "111020SB2",
                },
              ],
              name: "111020",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "111025R01",
                },
              ],
              name: "111025",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "111030R01",
                },
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "111030R02",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP13",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP14",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP15",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP16",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01VI1KKP17",
                        },
                      ],
                      name: "111030V01VI1",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 11,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE11a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE11b",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE11c",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE11d",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE11e",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE11f",
                        },
                      ],
                      name: "111030V01BGE11",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 12,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE12a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE12b",
                        },
                      ],
                      name: "111030V01BGE12",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 13,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE13a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE13b",
                        },
                      ],
                      name: "111030V01BGE13",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 14,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE14a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE14b",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE14c",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE14d",
                        },
                      ],
                      name: "111030V01BGE14",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 15,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE15a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE15b",
                        },
                      ],
                      name: "111030V01BGE15",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 16,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE16a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE16b",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE16c",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE16d",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE16e",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE16f",
                        },
                      ],
                      name: "111030V01BGE16",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 17,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11, 12, 13, 14, 15, 16, 17],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE17a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGE17b",
                        },
                      ],
                      name: "111030V01BGE17",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT11a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT11b",
                        },
                      ],
                      name: "111030V01BGT11",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT12a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT12b",
                        },
                      ],
                      name: "111030V01BGT12",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT13a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT13b",
                        },
                      ],
                      name: "111030V01BGT13",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT14a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT14b",
                        },
                      ],
                      name: "111030V01BGT14",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT15a",
                        },
                      ],
                      name: "111030V01BGT15",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT16a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT16b",
                        },
                      ],
                      name: "111030V01BGT16",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT17a",
                        },
                      ],
                      name: "111030V01BGT17",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT18a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "111030V01BGT18b",
                        },
                      ],
                      name: "111030V01BGT18",
                    },
                  ],
                  name: "111030V01",
                },
              ],
              name: "111030",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "111040R01",
                },
              ],
              name: "111040",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "111045R01",
                },
              ],
              name: "111045",
            },
            {
              parameters: [],
              children: [],
              name: "11B12",
            },
            {
              parameters: [],
              children: [],
              name: "11IG1",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [],
                  children: [],
                  name: "11IG2SFN1",
                },
              ],
              name: "11IG2",
            },
            {
              parameters: [],
              children: [],
              name: "11IG3",
            },
            {
              parameters: [],
              children: [],
              name: "11IG4",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [],
                  children: [],
                  name: "11IG5SFN1",
                },
              ],
              name: "11IG5",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [],
                  children: [],
                  name: "11IG6SFN1",
                },
              ],
              name: "11IG6",
            },
            {
              parameters: [],
              children: [],
              name: "11IG7",
            },
          ],
          name: "11",
        },
        {
          parameters: [],
          children: [
            {
              parameters: [],
              children: [],
              name: "12HP",
            },
            {
              parameters: [],
              children: [],
              name: "12SFN1",
            },
            {
              parameters: [],
              children: [],
              name: "12SFN2",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [],
                      name: "121050V01VI1",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V01BGT11a",
                        },
                      ],
                      name: "121050V01BGT11",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V01BGT12a",
                        },
                      ],
                      name: "121050V01BGT12",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V01BGT13a",
                        },
                      ],
                      name: "121050V01BGT13",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V01BGT14a",
                        },
                      ],
                      name: "121050V01BGT14",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V01BGT19a",
                        },
                      ],
                      name: "121050V01BGT19",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V01BGT21a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "121050V01BGT21b",
                        },
                      ],
                      name: "121050V01BGT21",
                    },
                  ],
                  name: "121050V01",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [],
                      name: "121050V02VI1",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V02BGT15a",
                        },
                      ],
                      name: "121050V02BGT15",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V02BGT16a",
                        },
                      ],
                      name: "121050V02BGT16",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V02BGT17a",
                        },
                      ],
                      name: "121050V02BGT17",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V02BGT18a",
                        },
                      ],
                      name: "121050V02BGT18",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V02BGT20a",
                        },
                      ],
                      name: "121050V02BGT20",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050V02BGT22a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "121050V02BGT22b",
                        },
                      ],
                      name: "121050V02BGT22",
                    },
                  ],
                  name: "121050V02",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [
                        {
                          name: "Positions",
                          value: [
                            {
                              index: 1,
                              sensorName: "BGE01",
                            },
                            {
                              index: 2,
                              sensorName: "BGE02",
                            },
                          ],
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt16",
                              multiSelect: false,
                              value: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                              ],
                            },
                            {
                              name: "SensorName",
                              type: "String",
                              multiSelect: false,
                              value: ["BGE01", "BGE02"],
                            },
                          ],
                        },
                        {
                          name: "Controller",
                          value: {
                            type: 0,
                          },
                          availableValues: [
                            {
                              name: "Type",
                              type: "Controller",
                              multiSelect: false,
                              value: ["DrehtFU_8S"],
                            },
                          ],
                        },
                        {
                          name: "Technology",
                          value: {
                            type: 0,
                          },
                          availableValues: [
                            {
                              name: "Type",
                              type: "Technology",
                              multiSelect: false,
                              value: ["SEW_AMA_BIN"],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121050DT1AE1BGE01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "121050DT1AE1BGE02",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "121050DT1AE1BGS01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "121050DT1AE1BGS02",
                        },
                      ],
                      name: "121050DT1AE1",
                    },
                  ],
                  name: "121050DT1",
                },
              ],
              name: "121050",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "Tools",
                      value: [],
                      availableValues: [
                        {
                          name: "AddressPosition",
                          type: "UInt32",
                          multiSelect: false,
                          value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        },
                        {
                          name: "ToolName",
                          type: "String",
                          multiSelect: false,
                          value: [
                            "CapChanger",
                            "Gluer",
                            "Gripper",
                            "Welder",
                            "WelderBox",
                          ],
                        },
                      ],
                    },
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                    {
                      name: "WerkzeugFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Profilfrei", "InPositionPOT", "InPosition"],
                        },
                      ],
                    },
                    {
                      name: "StellungFreigabeList",
                      value: [],
                      availableValues: [
                        {
                          name: "Address",
                          type: "UInt32",
                          multiSelect: false,
                          value: [
                            57,
                            58,
                            59,
                            60,
                            61,
                            62,
                            63,
                            64,
                            65,
                            66,
                            67,
                            68,
                            69,
                            70,
                            71,
                            72,
                            73,
                            74,
                            75,
                            76,
                            77,
                            78,
                            79,
                          ],
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "Stations",
                          type: "String[]",
                          multiSelect: true,
                          value: [
                            "111011BH1",
                            "111012BH1",
                            "111013BH1",
                            "111015BH1",
                            "111015BH2",
                            "111020V01",
                            "111020SB1",
                            "111020SB2",
                            "111030V01",
                            "121050V01",
                            "121050V02",
                            "121050DT1",
                            "121065V01",
                            "121065DT1",
                            "131070SB1",
                          ],
                        },
                        {
                          name: "Type",
                          type: "String",
                          multiSelect: false,
                          value: ["Freigabe", "Frei", "Belegt"],
                        },
                      ],
                    },
                  ],
                  children: [],
                  name: "121060R01",
                },
              ],
              name: "121060",
            },
            {
              parameters: [],
              children: [],
              name: "121061",
            },
            {
              parameters: [],
              children: [],
              name: "121062",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01VI1KKP11",
                        },
                      ],
                      name: "121065V01VI1",
                    },
                    {
                      parameters: [
                        {
                          name: "Valve",
                          value: {
                            index: 11,
                          },
                          availableValues: [
                            {
                              name: "Index",
                              type: "UInt32",
                              multiSelect: false,
                              value: [1, 11],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGE11a",
                        },
                      ],
                      name: "121065V01BGE11",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT11a",
                        },
                      ],
                      name: "121065V01BGT11",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT12a",
                        },
                      ],
                      name: "121065V01BGT12",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT13a",
                        },
                      ],
                      name: "121065V01BGT13",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT14a",
                        },
                      ],
                      name: "121065V01BGT14",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT15a",
                        },
                      ],
                      name: "121065V01BGT15",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT16a",
                        },
                      ],
                      name: "121065V01BGT16",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT17a",
                        },
                      ],
                      name: "121065V01BGT17",
                    },
                    {
                      parameters: [
                        {
                          name: "Parts",
                          value: [],
                          availableValues: [
                            {
                              name: "Name",
                              type: "String",
                              multiSelect: false,
                              value: [],
                            },
                          ],
                        },
                      ],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT18a",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "121065V01BGT18b",
                        },
                      ],
                      name: "121065V01BGT18",
                    },
                  ],
                  name: "121065V01",
                },
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [],
                      name: "121065DT1SFN1",
                    },
                  ],
                  name: "121065DT1",
                },
              ],
              name: "121065",
            },
            {
              parameters: [],
              children: [],
              name: "12IG1",
            },
          ],
          name: "12",
        },
        {
          parameters: [],
          children: [
            {
              parameters: [],
              children: [],
              name: "13HP",
            },
            {
              parameters: [],
              children: [
                {
                  parameters: [
                    {
                      name: "FmList",
                      value: [],
                      availableValues: [
                        {
                          name: "Name",
                          type: "String",
                          multiSelect: false,
                          value: null,
                        },
                        {
                          name: "ConnectedActions",
                          type: "String[]",
                          multiSelect: true,
                          value: [],
                        },
                      ],
                    },
                  ],
                  children: [
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI1KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI1KKP21",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI1KKP22",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI1KKP23",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI1KKP24",
                        },
                      ],
                      name: "131070SB1VI1",
                    },
                    {
                      parameters: [],
                      children: [
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI2KKP01",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI2KKP11",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI2KKP12",
                        },
                        {
                          parameters: [],
                          children: [],
                          name: "131070SB1VI2KKP13",
                        },
                      ],
                      name: "131070SB1VI2",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "131070SB1SFN1",
                    },
                    {
                      parameters: [],
                      children: [],
                      name: "131070SB1SFN2",
                    },
                  ],
                  name: "131070SB1",
                },
              ],
              name: "131070",
            },
          ],
          name: "13",
        },
        {
          parameters: [],
          children: [
            {
              parameters: [],
              children: [],
              name: "1IA1SFN1",
            },
          ],
          name: "1IA1",
        },
        {
          parameters: [],
          children: [],
          name: "1IA2",
        },
        {
          parameters: [],
          children: [],
          name: "1IA3",
        },
        {
          parameters: [],
          children: [],
          name: "1IA4",
        },
        {
          parameters: [],
          children: [],
          name: "1KV1",
        },
        {
          parameters: [],
          children: [],
          name: "1SV1",
        },
        {
          parameters: [],
          children: [],
          name: "1BS1",
        },
      ],
      name: "1",
    },
  ],
};

export const homeFormSubmit = [
  {
    operandIdentifier: 1,
    address: 6.0,
    name: "F_True",
    dataType: "BOOL",
    comment: "Inbetriebnahmebr�cke",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 85.4,
    name: "1IB1I01SFWE7",
    dataType: "BOOL",
    comment: "E7-�berbr�ckung Verriegelung Nebenbedienpult",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 62.1,
    name: "1IB1KFS1SFN1",
    dataType: "BOOL",
    comment: "Not-Halt Comfort Panel",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.0,
    name: "11HP1VI1KKP01EE",
    dataType: "BOOL",
    comment: "Einschaltventil ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.2,
    name: "11HP1VI1KKP01DE",
    dataType: "BOOL",
    comment: "Luft ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.3,
    name: "11HP1VI1KKP01DA",
    dataType: "BOOL",
    comment: "Luft aus",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.4,
    name: "11HP1VI1KKP01WE",
    dataType: "BOOL",
    comment: "K�hlwasser ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.5,
    name: "11HP1VI1KKP01WA",
    dataType: "BOOL",
    comment: "K�hlwasser aus",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 513.0,
    name: "11HP1VI1KKP01EBER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 513.1,
    name: "11HP1VI1KKP01DBER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 513.2,
    name: "11HP1VI1KKP01WBER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.0,
    name: "11HP1VI1BP01E",
    dataType: "BOOL",
    comment: "Kontrolle Einschaltventil",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.2,
    name: "11HP1BP01ND",
    dataType: "BOOL",
    comment: "Kontrolle Niederdruck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.4,
    name: "11HP1BF01NDIMP",
    dataType: "BOOL",
    comment: "Impuls",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.6,
    name: "11HP1BP01HD",
    dataType: "BOOL",
    comment: "Kontrolle Hochdruck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 517.0,
    name: "11HP1BF01HDIMP",
    dataType: "BOOL",
    comment: "Impuls",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.0,
    name: "113450V01VI2KKPR01V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.1,
    name: "113450V01VI2KKPR01R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.2,
    name: "113450V01VI2KKPR02V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.3,
    name: "113450V01VI2KKPR02R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 533.0,
    name: "113450V01VI2KKPR01BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 533.1,
    name: "113450V01VI2KKPR02BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 522.6,
    name: "113450V01VI1KKPR01V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 522.7,
    name: "113450V01VI1KKPR01R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 523.0,
    name: "113450V01VI1KKPR02V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 523.1,
    name: "113450V01VI1KKPR02R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 523.3,
    name: "113450V01VI1KKPR01BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 523.4,
    name: "113450V01VI1KKPR02BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 523.5,
    name: "113450SB1VI1KKPR01BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 82.0,
    name: "113440R01PFWE7",
    dataType: "BOOL",
    comment: "E7 �berbr�ckung Schutzkreis",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 130.1,
    name: "113440R01KF1K36",
    dataType: "BOOL",
    comment: "Schutzkreis f�r Schwenkeinheit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 56.2,
    name: "113440R01SFWE7",
    dataType: "BOOL",
    comment: "E7 Prozessgeschwindigkeit bei Single-Step",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 142.1,
    name: "113440R01KF1K36K",
    dataType: "BOOL",
    comment: "R�ckleseeingang Relaismodul",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.0,
    name: "11IG1SFRES1",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.1,
    name: "11IG1SFRES2",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.2,
    name: "11IG1SFRES3",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.3,
    name: "11IG1SFRES4",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.4,
    name: "11IG1SFRES5",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.0,
    name: "11IG2PFRES1",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.1,
    name: "11IG2PFWE2_3",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.2,
    name: "11IG2PFWE2_2",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.3,
    name: "11IG2PFWE2_1",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.4,
    name: "11IG2PFRES2",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 86.2,
    name: "11IG2SFWE2_1",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 86.3,
    name: "11IG2SFWE2_2",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 92.0,
    name: "11IG2SFWE2_3",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 92.1,
    name: "11IG2SFW_4",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 92.2,
    name: "11IG2SFW_5",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.0,
    name: "11IG2SFRES1",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.1,
    name: "11IG2SFRES2",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.2,
    name: "11IG2SFRES3",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.3,
    name: "11IG2SFRES4",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.4,
    name: "11IG2SFRES5",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 236.0,
    name: "123456OH1GP1",
    dataType: "BOOL",
    comment: "Achse X Schmierung Ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 236.1,
    name: "123456OH1GP2",
    dataType: "BOOL",
    comment: "Achse Z Schmierung Ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.0,
    name: "123456OH1GP1OK",
    dataType: "BOOL",
    comment: "Achse X Schmierung OK",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.1,
    name: "123456OH1GP1Err",
    dataType: "BOOL",
    comment: "Achsen X Schmierung Fehler",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.2,
    name: "123456OH1GP2OK",
    dataType: "BOOL",
    comment: "Achse Z Schmierung OK",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.3,
    name: "123456OH1GP2Err",
    dataType: "BOOL",
    comment: "Achsen Z Schmierung Fehler",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.0,
    name: "123456OH1K01BGE99aR",
    dataType: "BOOL",
    comment: "Thynkers-Absteckung 1 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.1,
    name: "123456OH1K01BGE99aV",
    dataType: "BOOL",
    comment: "Buhl-Absteckung 1 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.2,
    name: "123456OH1K01BGE99bR",
    dataType: "BOOL",
    comment: "Buhl -Absteckung 2 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.3,
    name: "123456OH1K01BGE99bV",
    dataType: "BOOL",
    comment: "Buhl -Absteckung 2 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 2064.0,
    name: "123456OH1AE1TAF1K100",
    dataType: "BOOL",
    comment: "Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2051.0,
    name: "123456OH1AE1BGE1R",
    dataType: "BOOL",
    comment: "X-Achse in Station 3906",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2051.1,
    name: "123456OH1AE1BGE1V",
    dataType: "BOOL",
    comment: "X-Achse in Station 3906-N",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2064.0,
    name: "123456OH1AE1TAF1K100K",
    dataType: "BOOL",
    comment: "Kontrolle Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 2086.0,
    name: "123456OH1AE2TAF1K100",
    dataType: "BOOL",
    comment: "Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2073.0,
    name: "123456OH1AE2BGE1R",
    dataType: "BOOL",
    comment: "Z-Achse in Grundstellung oben",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2086.0,
    name: "123456OH1AE2TAF1K100K",
    dataType: "BOOL",
    comment: "Kontrolle Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.2,
    name: "123456OH1VI2BGE11aR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.3,
    name: "123456OH1VI2BGE11aV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.4,
    name: "123456OH1VI2BGE11bR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.5,
    name: "123456OH1VI2BGE11bV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.6,
    name: "123456OH1VI2BGE11cR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.7,
    name: "123456OH1VI2BGE11cV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.0,
    name: "123456OH1VI2BGE12aR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.1,
    name: "123456OH1VI2BGE12aV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.2,
    name: "123456OH1VI2BGE12bR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.3,
    name: "123456OH1VI2BGE12bV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.4,
    name: "123456OH1VI2BGE13aR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.5,
    name: "123456OH1VI2BGE13aV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.6,
    name: "123456OH1VI2BGE13bR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.7,
    name: "123456OH1VI2BGE13bV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 557.4,
    name: "123456OH1VI2BGT13",
    dataType: "BOOL",
    comment: "Teilkontrolle Seitenteil innen",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 557.6,
    name: "123456OH1VI2BGT12",
    dataType: "BOOL",
    comment: "Teilkontrolle Seitenteil innen",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 557.7,
    name: "123456OH1VI2BGT11",
    dataType: "BOOL",
    comment: "Teilkontrolle Seitenteil innen",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 244.0,
    name: "123456OH1BGS10V",
    dataType: "BOOL",
    comment: "Handligs-Einheit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 0.0,
    name: "1IA1PFK83PIN1",
    dataType: "BOOL",
    comment: "Standmenge",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 0.1,
    name: "1IA1PFK83PIN2",
    dataType: "BOOL",
    comment: "Standmenge",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 0.2,
    name: "1IA1PFK83PIN3",
    dataType: "BOOL",
    comment: "Standmenge",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 0.7,
    name: "1IA1SFWE7",
    dataType: "BOOL",
    comment: "E7 �berbr�ckung Verriegelung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 6.1,
    name: "1IA1SFA1",
    dataType: "BOOL",
    comment: "Antriebeschalter",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.0,
    name: "1BS1TB1NGIO",
    dataType: "BOOL",
    comment: "Kontrolle Netzger�t in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.1,
    name: "1BS1BA1NETZ",
    dataType: "BOOL",
    comment: "Netzkontrolle in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.2,
    name: "1BS1BT1",
    dataType: "BOOL",
    comment: "Schranktemperatur in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.3,
    name: "1BS1/SIFA",
    dataType: "BOOL",
    comment: "Sammelmeldung kein Sicherungsfall",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 517.6,
    name: "1ED1/SIFA",
    dataType: "BOOL",
    comment: "Sammelmeldung kein Sicherungsfall",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 517.7,
    name: "1ED1TB1NGIO",
    dataType: "BOOL",
    comment: "Kontrolle Netzger�t in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 0.1,
    name: "1ES1QB1K",
    dataType: "BOOL",
    comment: "Leistung ist Ein ES-Schrank",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
];

export const homeFormSubmitWithIds: HomeFormReponse = homeFormSubmit.map(
  (el, id) => ({
    id,
    ...el,
  })
);
