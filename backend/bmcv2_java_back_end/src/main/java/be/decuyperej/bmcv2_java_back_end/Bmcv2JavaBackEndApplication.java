package be.decuyperej.bmcv2_java_back_end;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "be.decuyperej.bmcv2_java_back_end.repositories")
public class Bmcv2JavaBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(Bmcv2JavaBackEndApplication.class, args);
	}

}
