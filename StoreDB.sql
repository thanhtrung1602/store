PGDMP  5    5                |            StoreDB    16.3    16.3 G    B           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            C           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            D           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            E           1262    16397    StoreDB    DATABASE     �   CREATE DATABASE "StoreDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Vietnamese_Vietnam.1258';
    DROP DATABASE "StoreDB";
                postgres    false                        2615    16565    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            F           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                   postgres    false    5            G           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                   postgres    false    5            n           1247    17113    UserRole    TYPE     E   CREATE TYPE public."UserRole" AS ENUM (
    'ADMIN',
    'CLIENT'
);
    DROP TYPE public."UserRole";
       public          postgres    false    5            �            1259    16566    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false    5            �            1259    16578 	   addresses    TABLE     O  CREATE TABLE public.addresses (
    address_id integer NOT NULL,
    user_id integer,
    street character varying(255),
    city character varying(100),
    state character varying(100),
    zip_code character varying(20),
    country character varying(100),
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.addresses;
       public         heap    postgres    false    5            �            1259    16577    addresses_address_id_seq    SEQUENCE     �   CREATE SEQUENCE public.addresses_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.addresses_address_id_seq;
       public          postgres    false    5    217            H           0    0    addresses_address_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.addresses_address_id_seq OWNED BY public.addresses.address_id;
          public          postgres    false    216            �            1259    16588 
   categories    TABLE     �   CREATE TABLE public.categories (
    category_id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.categories;
       public         heap    postgres    false    5            �            1259    16587    categories_category_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categories_category_id_seq;
       public          postgres    false    219    5            I           0    0    categories_category_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.categories_category_id_seq OWNED BY public.categories.category_id;
          public          postgres    false    218            �            1259    16598 
   orderitems    TABLE     �   CREATE TABLE public.orderitems (
    order_item_id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.orderitems;
       public         heap    postgres    false    5            �            1259    16597    orderitems_order_item_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orderitems_order_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.orderitems_order_item_id_seq;
       public          postgres    false    221    5            J           0    0    orderitems_order_item_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.orderitems_order_item_id_seq OWNED BY public.orderitems.order_item_id;
          public          postgres    false    220            �            1259    16606    orders    TABLE     �   CREATE TABLE public.orders (
    order_id integer NOT NULL,
    user_id integer,
    total numeric(10,2) NOT NULL,
    status character varying(50) NOT NULL,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.orders;
       public         heap    postgres    false    5            �            1259    16605    orders_order_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.orders_order_id_seq;
       public          postgres    false    5    223            K           0    0    orders_order_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.orders_order_id_seq OWNED BY public.orders.order_id;
          public          postgres    false    222            �            1259    16614    products    TABLE     #  CREATE TABLE public.products (
    product_id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text,
    price numeric(10,2) NOT NULL,
    stock integer DEFAULT 0,
    category_id integer,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.products;
       public         heap    postgres    false    5            �            1259    16613    products_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public          postgres    false    5    225            L           0    0    products_product_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;
          public          postgres    false    224            �            1259    16625    reviews    TABLE     �   CREATE TABLE public.reviews (
    review_id integer NOT NULL,
    product_id integer,
    user_id integer,
    rating integer,
    comment text,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.reviews;
       public         heap    postgres    false    5            �            1259    16624    reviews_review_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reviews_review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.reviews_review_id_seq;
       public          postgres    false    227    5            M           0    0    reviews_review_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.reviews_review_id_seq OWNED BY public.reviews.review_id;
          public          postgres    false    226            �            1259    16635    users    TABLE     z  CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(100) NOT NULL,
    full_name character varying(100),
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP,
    role public."UserRole" DEFAULT 'CLIENT'::public."UserRole" NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    878    878    5            �            1259    16634    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    229    5            N           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    228            w           2604    16581    addresses address_id    DEFAULT     |   ALTER TABLE ONLY public.addresses ALTER COLUMN address_id SET DEFAULT nextval('public.addresses_address_id_seq'::regclass);
 C   ALTER TABLE public.addresses ALTER COLUMN address_id DROP DEFAULT;
       public          postgres    false    216    217    217            y           2604    16591    categories category_id    DEFAULT     �   ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categories_category_id_seq'::regclass);
 E   ALTER TABLE public.categories ALTER COLUMN category_id DROP DEFAULT;
       public          postgres    false    218    219    219            {           2604    16601    orderitems order_item_id    DEFAULT     �   ALTER TABLE ONLY public.orderitems ALTER COLUMN order_item_id SET DEFAULT nextval('public.orderitems_order_item_id_seq'::regclass);
 G   ALTER TABLE public.orderitems ALTER COLUMN order_item_id DROP DEFAULT;
       public          postgres    false    220    221    221            }           2604    16609    orders order_id    DEFAULT     r   ALTER TABLE ONLY public.orders ALTER COLUMN order_id SET DEFAULT nextval('public.orders_order_id_seq'::regclass);
 >   ALTER TABLE public.orders ALTER COLUMN order_id DROP DEFAULT;
       public          postgres    false    222    223    223                       2604    16617    products product_id    DEFAULT     z   ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 B   ALTER TABLE public.products ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    16628    reviews review_id    DEFAULT     v   ALTER TABLE ONLY public.reviews ALTER COLUMN review_id SET DEFAULT nextval('public.reviews_review_id_seq'::regclass);
 @   ALTER TABLE public.reviews ALTER COLUMN review_id DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    16638    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    229    228    229            1          0    16566    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    215   %U       3          0    16578 	   addresses 
   TABLE DATA           l   COPY public.addresses (address_id, user_id, street, city, state, zip_code, country, created_at) FROM stdin;
    public          postgres    false    217   2V       5          0    16588 
   categories 
   TABLE DATA           P   COPY public.categories (category_id, name, description, created_at) FROM stdin;
    public          postgres    false    219   OV       7          0    16598 
   orderitems 
   TABLE DATA           f   COPY public.orderitems (order_item_id, order_id, product_id, quantity, price, created_at) FROM stdin;
    public          postgres    false    221   lV       9          0    16606    orders 
   TABLE DATA           N   COPY public.orders (order_id, user_id, total, status, created_at) FROM stdin;
    public          postgres    false    223   �V       ;          0    16614    products 
   TABLE DATA           h   COPY public.products (product_id, name, description, price, stock, category_id, created_at) FROM stdin;
    public          postgres    false    225   �V       =          0    16625    reviews 
   TABLE DATA           ^   COPY public.reviews (review_id, product_id, user_id, rating, comment, created_at) FROM stdin;
    public          postgres    false    227   �V       ?          0    16635    users 
   TABLE DATA           `   COPY public.users (user_id, username, password, email, full_name, created_at, role) FROM stdin;
    public          postgres    false    229   �V       O           0    0    addresses_address_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.addresses_address_id_seq', 1, false);
          public          postgres    false    216            P           0    0    categories_category_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categories_category_id_seq', 1, false);
          public          postgres    false    218            Q           0    0    orderitems_order_item_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.orderitems_order_item_id_seq', 1, false);
          public          postgres    false    220            R           0    0    orders_order_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.orders_order_id_seq', 1, false);
          public          postgres    false    222            S           0    0    products_product_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.products_product_id_seq', 1, false);
          public          postgres    false    224            T           0    0    reviews_review_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.reviews_review_id_seq', 1, false);
          public          postgres    false    226            U           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 2, true);
          public          postgres    false    228            �           2606    16574 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    215            �           2606    16586    addresses addresses_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (address_id);
 B   ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_pkey;
       public            postgres    false    217            �           2606    16596    categories categories_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    219            �           2606    16604    orderitems orderitems_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_pkey PRIMARY KEY (order_item_id);
 D   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_pkey;
       public            postgres    false    221            �           2606    16612    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    223            �           2606    16623    products products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    225            �           2606    16633    reviews reviews_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (review_id);
 >   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_pkey;
       public            postgres    false    227            �           2606    16643    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    229            �           1259    16644    categories_name_key    INDEX     Q   CREATE UNIQUE INDEX categories_name_key ON public.categories USING btree (name);
 '   DROP INDEX public.categories_name_key;
       public            postgres    false    219            �           1259    16645    products_category_id_idx    INDEX     T   CREATE INDEX products_category_id_idx ON public.products USING btree (category_id);
 ,   DROP INDEX public.products_category_id_idx;
       public            postgres    false    225            �           1259    16647    users_email_key    INDEX     I   CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);
 #   DROP INDEX public.users_email_key;
       public            postgres    false    229            �           1259    16646    users_username_key    INDEX     O   CREATE UNIQUE INDEX users_username_key ON public.users USING btree (username);
 &   DROP INDEX public.users_username_key;
       public            postgres    false    229            �           2606    16648     addresses addresses_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 J   ALTER TABLE ONLY public.addresses DROP CONSTRAINT addresses_user_id_fkey;
       public          postgres    false    229    217    4761            �           2606    16653 #   orderitems orderitems_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);
 M   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_order_id_fkey;
       public          postgres    false    223    4753    221            �           2606    16658 %   orderitems orderitems_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderitems
    ADD CONSTRAINT orderitems_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);
 O   ALTER TABLE ONLY public.orderitems DROP CONSTRAINT orderitems_product_id_fkey;
       public          postgres    false    221    4756    225            �           2606    16663    orders orders_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    229    4761    223            �           2606    16668 "   products products_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(category_id);
 L   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_id_fkey;
       public          postgres    false    225    4749    219            �           2606    16673    reviews reviews_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id);
 I   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_product_id_fkey;
       public          postgres    false    225    4756    227            �           2606    16678    reviews reviews_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 F   ALTER TABLE ONLY public.reviews DROP CONSTRAINT reviews_user_id_fkey;
       public          postgres    false    229    227    4761            1   �   x�m�Kj1D�ݧ�}�%�}��`���6d�	�?=	$!D�B��I�z`���2He3Idݼo]}���{�����2x3o�Af�Yj�-h����`oU���('���@� -bG�'��-VT$��#֗�����y}����o�������� %?�p&j-�D�2ZM^}U��r,�6�=�����P#��g���[�R��:G)��r%Gd��MAp@Y(/ ��V�~�!������v���;X*	џ��< �%b�      3      x������ � �      5      x������ � �      7      x������ � �      9      x������ � �      ;      x������ � �      =      x������ � �      ?   �   x���Kn�@  ���)X�u�(ê��E+��4��F@*L���I��xy��$0ifl��ra]��o��X���iߋ�^�3���gW��ъ�ל:��>�0>�6��(�ZJ}ʈO�:?��D(���'�q��e1l��k�Ɛ��h+�7I����!^R�;�����m>�o2���|����w�4�Me���8.s�x�m�O!�AR�     