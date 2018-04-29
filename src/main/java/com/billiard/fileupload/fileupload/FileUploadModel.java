package com.billiard.fileupload.fileupload;

import javax.persistence.*;

import lombok.Data;

/**
 * FileUploadModel
 */
@Data
@Entity
@Table(name="image_storage")
public class FileUploadModel {

    @Id @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="image_id")
    private Long id;

    @Column(name="image_name")
    private String imageName;

    @Column(name="image_group") 
    private String imageGroup;

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @param imageGroup the imageGroup to set
     */
    public void setImageGroup(String imageGroup) {
        this.imageGroup = imageGroup;
    }

    /**
     * @param imageName the imageName to set
     */
    public void setImageName(String imageName) {
        this.imageName = imageName;
    }
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return the image_group
     */
    /**
     * @return the imageGroup
     */
    public String getImageGroup() {
        return imageGroup;
    }

    /**
     * @return the imageName
     */
    public String getImageName() {
        return imageName;
    }

}