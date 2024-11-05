
export interface UserShort {
    "clients": [
        {
          "id": string,
          "name": string,
          "photoUrl": string
        }
      ],
      "competences": [
        {
          "isDefault": boolean,
          "name": string
        }
      ],
      "email": string,
      "id": string,
      "level": string,
      "location": string,
      "name": string,
      "photoUrl": string,
      "role": string
}