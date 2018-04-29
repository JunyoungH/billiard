package com.billiard.fileupload.fileupload;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * FileUploadRepository
 */
public interface FileUploadRepository extends JpaRepository<FileUploadModel, Long> {
    
    List<FileUploadModel> findByimageGroup(String imageGroup);
}