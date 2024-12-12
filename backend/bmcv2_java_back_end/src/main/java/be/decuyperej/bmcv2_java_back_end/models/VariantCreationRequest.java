package be.decuyperej.bmcv2_java_back_end.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public class VariantCreationRequest {
    @JsonProperty("Variant")
    @NotNull
    private Variant Variant;
    @JsonProperty("Model")
    @NotNull
    private Model Model;
    @NotNull
    @JsonProperty("Engine")
    private Engine Engine;



    public Variant getVariant() {
        return Variant;
    }

    public Model getModel() {
        return Model;
    }

    public Engine getEngine() {
        return Engine;
    }

}
