-- Table: public.user_variables

CREATE TABLE public.user_variables
(
    user_id bigint NOT NULL,
    var_name text COLLATE pg_catalog."default" NOT NULL,
    var_value text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT unique_var_name UNIQUE (user_id, var_name),
    CONSTRAINT user_to_user_variables FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

-- Index: fki_user_to_user_id

CREATE INDEX fki_user_to_user_id
    ON public.user_variables USING btree
    (user_id ASC NULLS LAST)
    TABLESPACE pg_default;