package sb_amoba_kincs_mvc.rd.model.dto;

public class PersistSuccessDTO<T> {

    private T persistedObject;
    private boolean persistSuccess;


    public PersistSuccessDTO(T persistedObject, boolean persistSuccess) {
        
        this.persistedObject = persistedObject;
        this.persistSuccess = persistSuccess;
    }


    public T getPersistedObject() {
        return persistedObject;
    }

    public void setPersistedObject(T persistedObject) {
        this.persistedObject = persistedObject;
    }

    public boolean isPersistSuccess() {
        return persistSuccess;
    }

    public void setPersistSuccess(boolean persistSuccess) {
        this.persistSuccess = persistSuccess;
    }


    @Override
    public String toString() {
        return "PersistSuccessDTO [persistedObject=" + persistedObject + ", persistSuccess=" + persistSuccess + "]";
    }
}
