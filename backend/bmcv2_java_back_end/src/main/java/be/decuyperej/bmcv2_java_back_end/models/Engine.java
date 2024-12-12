package be.decuyperej.bmcv2_java_back_end.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Engines")
public class Engine {

    @Id
    private String id;
    @JsonProperty("power_kw")
    @NotNull
    private int power_kw;
    @JsonProperty("power_hp")
    @NotNull
    private int power_hp;
    @JsonProperty("engine_code")
    @NotNull
    private String engine_code;
    @NotNull
    @JsonProperty("fuel_consumption")
    @NotNull
    private String fuel_consumption;
    @NotNull
    @JsonProperty("engine")
    private String engine;
    @NotNull
    @JsonProperty("tank_capacity")
    private int tank_capacity;

    public String getId() {
        return id;
    }

    public int getTank_capacity() {
        return tank_capacity;
    }

    public String getEngine() {
        return engine;
    }

    public String getFuelConsumption() {
        return fuel_consumption;
    }

    public String getEngineCode() {
        return engine_code;
    }

    public int getPowerHp() {
        return power_hp;
    }

    public int getPowerKw() {
        return power_kw;
    }
}
