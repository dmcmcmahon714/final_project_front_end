Inspired by the now defunct absolutepunk.net.  A place to talk smack about music and get the latest news on the seen.



This is a basic web forum where users can create accounts, make posts, view posts by all users, and edit and delete posts.

The authentication piece was built in rails using using HTTP Cookies and the Rails Session Data. Session data is apparently more secure over JWT token.  It uses a password digest to encrpyt passwords. If a User password is hacked, with JWT we would have to wait for the token to expire before we could 100% remove access to the User account. With session data, we can simply delete all browser cookies and all the server’s session data associated with that User and immediately block access to the account with the hacked credentials. However, there are some benefits with using JWT over Session data.

The react front end uses browser router dom to direct to a homepage when a user is logged in, interacting with the rails logged in status on the back end which logged in status functions.

Unfortunately the forum was not as easy to incorporate.  Initially I learned how to build a forum in rails with authentication using the devise gem.  The view were rendered in rails and it was easy to create relationships and establish functionality including sign up, log in, log out, post, comment, and like.  I thought the views would be easy enough to spin up in react, but it didn't quite work out that way.

So I restarted using the Authenticaiton piece I initally mentioned, and did something similar to the noticeboard app.  It was difficult to establish the relationship between users and their posts.  Heroku deployment was also an issue.  I attempted added in comment functionality, which I'd like to finish. I also want to add likes.  Ideally I would also like to establish admin privileges, so only certain members could post, and all others would comment.