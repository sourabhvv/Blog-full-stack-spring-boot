package com.tericcabrel.authapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tericcabrel.authapi.entities.Blog;
public interface BlogRepository extends JpaRepository<Blog,Integer>{
	 Blog findByTitle(String title);
}

