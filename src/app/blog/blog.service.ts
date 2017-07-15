import { Http, Response,  } from "@angular/http";
import { Injectable,  } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';

import { ErrorService } from "../errors/error.service";

import { BlogPost } from "./blogpost-list/blogPost.model";

@Injectable()
export class BlogService {
  private blogPosts: BlogPost[] = [];

  constructor(private http: Http, private errorService: ErrorService) {}

  addBlogPost(blogPost) {

  }

  getBlogPosts() {
    return this.http.get('http://localhost:3000/blogpost')
      .map((response: Response) => {
        const result = response.json();
        let transformedBlogPosts: BlogPost[] = [];
        for (let blogPost of result.obj) {
          transformedBlogPosts.push(new BlogPost(
            blogPost.title,
            blogPost.url,
            blogPost.date,
            blogPost.intro,
            blogPost.tags)
          );
        }
        this.blogPosts = transformedBlogPosts;
        return transformedBlogPosts;
      })
      .catch((error) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }
}
