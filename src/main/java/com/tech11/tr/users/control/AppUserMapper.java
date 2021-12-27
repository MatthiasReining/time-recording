package com.tech11.tr.users.control;

import com.tech11.tr.users.entity.AppUser;
import com.tech11.tr.users.entity.AppUserEntity;

import org.mapstruct.Mapper;

@Mapper(componentModel = "cdi")
public interface AppUserMapper {

    AppUser toDomain(AppUserEntity entity);
}
