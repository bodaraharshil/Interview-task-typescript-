import express, { Request, response, Response } from "express";
import User from "../models/user";
const router = express.Router();

interface data {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

router.post(
  "/adduser",
  async (req: Request, res: Response): Promise<any> => {
    console.log(req.body);
    try {
      const { first_name, last_name, email, role } = req.body as data;
      if (!first_name || !last_name || !email || !role) {
        return res.status(422).json({
          error: "please add all field",
        });
      }
      await User.findOne({ email: email })
        .then((data: data) => {
          if (data) {
            return res.status(401).json({
              error: "email address is alerady used",
            });
          } else {
            const user = new User({
              first_name,
              last_name,
              email,
              role,
            });
            user
              .save()
              .then((data: data) => {
                return res.status(200).json({
                  message: "user add successfuly",
                  data,
                });
              })
              .catch((error: string) => {
                console.log("error:", error);
              });
          }
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error) {
      return res.status(401).json({
        error: "somethinmg went wrong",
      });
    }
  }
);

router.get(
  "/alluser",
  async (req: Request, res: Response): Promise<any> => {
    try {
      await User.find()
        .then((data: data) => {
          return res.status(200).json({
            data,
          });
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error: any) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
  }
);

router.delete(
  "/deleteuser/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      await User.findByIdAndRemove(id)
        .then((data: data) => {
          return res.status(200).json({
            message: "user deleted successfuly",
          });
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
  }
);

router.post(
  "/updateuser/:id",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const { first_name, last_name, email, role } = req.body as data;
      if (!first_name || !last_name || !email || !role) {
        return res.status(401).json({
          error: "please add all field",
        });
      }
      const updatedata = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        role: role,
      };
      await User.findByIdAndUpdate(id, { $set: updatedata })
        .then((data: data) => {
          return res.status(200).json({
            message: "data updated successfuly",
          });
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error) {
      return res.status(400).json({
        erorr: "something went wrong",
      });
    }
  }
);

router.get(
  "/search/:first_name",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const first_name = req.params.first_name;
      await User.find({ first_name: first_name })
        .then((data: object) => {
          return res.status(200).json({
            data,
          });
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
  }
);

router.get(
  "/searchrole/:role",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const role = req.params.role;
      await User.find({ role: role })
        .then((data: object) => {
          return res.status(200).json({
            data,
          });
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
  }
);

router.get(
  "/searchdata/:first_name",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const first_name = req.params.first_name;
      await User.find({first_name:first_name})
        .then((data: data) => {
          return res.status(200).json({
            data,
          });
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error: any) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
  }
);

router.get(
  "/searchroledata/:role",
  async (req: Request, res: Response): Promise<any> => {
    try {
      const role = req.params.role;
      await User.find({role:role})
        .then((data: data) => {
          return res.status(200).json({
            data,
          });
        })
        .catch((error: string) => {
          console.log("error:", error);
        });
    } catch (error: any) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
  }
);

module.exports = router;
