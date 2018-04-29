package com.billiard.fileupload.fileupload;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestBody;


/**
 * FileUploadController
 */
@CrossOrigin("*")
@RestController
public class FileUploadController {

    @Autowired
    FileUploadRepository fileUploadRepository;

    private static final String UPLOAD_FOLDER = "\\upload\\";

    @PostMapping("save")
    public List<FileUploadModel> save(@RequestParam("imageFile") MultipartFile imageFile, 
                                        FileUploadModel fileUpload) throws IOException{
     
        String currentTime = String.valueOf(System.currentTimeMillis());
        String imageName = currentTime+"_"+imageFile.getOriginalFilename();
        String realPath = String.valueOf(new ClassPathResource("").getFile());

         if(!new ClassPathResource(UPLOAD_FOLDER).exists()){
            new File(realPath+UPLOAD_FOLDER).mkdir();
            System.out.println(new File(realPath+UPLOAD_FOLDER).getPath());
         }
        
         imageFile.transferTo(new File(realPath+UPLOAD_FOLDER+imageName));
         fileUpload.setImageName(imageName);
         fileUploadRepository.save(fileUpload);
	
        return fileUploadRepository.findAll();
    }

    @GetMapping("get")
    public List<FileUploadModel> getAll(){
        return fileUploadRepository.findAll();
    }

    @PostMapping("addImageToMenu")
    public List<FileUploadModel> addImageToMenu(@RequestBody FileUploadModel fileUploadModel) {
        
        FileUploadModel updatedModel = fileUploadRepository.findById(fileUploadModel.getId()).orElse(new FileUploadModel());
        updatedModel.setImageGroup(fileUploadModel.getImageGroup());
        fileUploadRepository.save(updatedModel);

        return fileUploadRepository.findByimageGroup(updatedModel.getImageGroup());
    }

    @GetMapping("getImageToMenu/{imageGroup}")
    public List<FileUploadModel> getImageToMenu(@PathVariable String imageGroup){
        return fileUploadRepository.findByimageGroup(imageGroup);
    }
    

}