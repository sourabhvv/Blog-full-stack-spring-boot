package com.tericcabrel.authapi.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;


import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Table(name="blog")
@Entity
public class Blog {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUseId() {
		return useId;
	}

	public void setUseId(int useId) {
		this.useId = useId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	@Column(name="userId",nullable = true)
	private int useId;
	
	@Column(name="title",nullable = true)
	private String title;
	
	@Column(name="content",nullable = true, length = 3500)
	private String content;
	
	@CreationTimestamp
	@Column(name = "created_at", updatable = false)
	private Date createdAt;
	
	@Column(name = "updated_at", updatable = true)
	private Date updatedAt;
	
	
	
	

}
