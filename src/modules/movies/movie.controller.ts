import { Request, Response } from "express"
import { MovieService } from "./movie.service"

    const createMovie = async(req : Request, res : Response) => {
    const movieData = req.body;
    const result = await MovieService.createMovie(movieData)
  
    res.json({
     success: true,
     message: 'movie is created successfully',
     data: result,
    });
 }

 const getAllMovies = async (req: Request, res: Response) => {
    try {
      const result = await MovieService.getAllMovies();
  
      res.status(200).json({
        success: true,
        message: "Movies are fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };
  
 const getMovieById = async (req: Request, res: Response) => {
    try {
        const {movieId} = req.params;
      const result = await MovieService.getMovieById(movieId);
  
      res.status(200).json({
        success: true,
        message: "Movies are fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };
  

 export const MovieControllers = {
    createMovie,
    getAllMovies,
    getMovieById,
 }