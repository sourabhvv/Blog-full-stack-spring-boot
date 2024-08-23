package com.tericcabrel.authapi.services;

import java.text.Normalizer;
import java.util.List;
import java.util.Locale;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.tericcabrel.authapi.entities.Blog;
import com.tericcabrel.authapi.entities.User;
import com.tericcabrel.authapi.repositories.BlogRepository;
@Service
public class BlogServices {
	
	@Autowired
	private BlogRepository BlogRepository;
	
	private static final Pattern NONLATIN = Pattern.compile("[^\\w-]");
    private static final Pattern WHITESPACE = Pattern.compile("[\\s]");
	
	public Blog createBlog(Blog blog) {
		 Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	     User currentUser = (User) authentication.getPrincipal();
         blog.setUseId(currentUser.getId());
         
         String slugTitle = toSlug(blog.getTitle());    
         blog.setTitle(slugTitle);
         return BlogRepository.save(blog);    
    }
	
	public List<Blog> getAllBlogs(){
		
		return BlogRepository.findAll();
	}
	
   
	
	public Blog getSingleBlog(String slug) {
		return BlogRepository.findByTitle(slug);
	}
	
	public static String toSlug(String title) {
        String nowhitespace = WHITESPACE.matcher(title).replaceAll("-");
        String normalized = Normalizer.normalize(nowhitespace, Normalizer.Form.NFD);
        String slug = NONLATIN.matcher(normalized).replaceAll("");
        return slug.toLowerCase(Locale.ENGLISH)
                   .replaceAll("-{2,}", "-")
                   .replaceAll("^-|-$", "");
    }
	
	public Blog editBlog(String id, Blog updatedBlog) {
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    User currentUser = (User) authentication.getPrincipal();
	    
	    Blog existingBlog = BlogRepository.findByTitle(id);
	    
	    if (existingBlog == null) {
	        return null; 
	    }
	    
	    
	    
	    if (existingBlog.getUseId() !=currentUser.getId()) {
	        return null; 
	    }
	    
	    existingBlog.setTitle(toSlug(updatedBlog.getTitle()));
	    existingBlog.setContent(updatedBlog.getContent());
	    // Update other fields as needed
	    
	    return BlogRepository.save(existingBlog);
	}
	
	

	public List<Blog> getBlogsbyuserid() {
		 Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	     User currentUser = (User) authentication.getPrincipal();
		// TODO Auto-generated method stub
	
		return BlogRepository.findByUseId(currentUser.getId());

	}

	
	

}