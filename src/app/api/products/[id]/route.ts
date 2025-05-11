import { toGetAllProducts, toGetProductsDetail } from "@/api-requests/products";
import {
  toGetAllCategories,
  toGetProductsByCategories,
} from "@/api-requests/products/categories";
import instance from "@/service/axios";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const res = await toGetProductsDetail(id);
    if (!res?.data) {
      return NextResponse.json(
        { message: "No data returned from products API" },
        { status: 500 }
      );
    }
    return NextResponse.json(res?.data);
  } catch (error: any) {
    console.error("Error during POST request:", error);

    if (error.response) {
      return NextResponse.json(
        {
          message: "Error from external API",
          error: error.response?.data || error.message,
        },
        { status: error.response?.status || 500 }
      );
    } else if (error.request) {
      return NextResponse.json(
        {
          message: "No response received from external API",
          error: error.message,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "An unexpected error occurred", error: error.message },
        { status: 500 }
      );
    }
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { id } = params;

  try {
    const res = await instance.put(`/products/${id}`, body);
    return NextResponse.json(res?.data);
  } catch (error: any) {
    if (error) {
      return Response.json(error.payload, {
        status: error.status,
      });
    } else {
      return Response.json(
        {
          message: "Có lỗi xảy ra",
        },
        {
          status: 500,
        }
      );
    }
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const res = await instance.delete(`/products/${id}`);
    return NextResponse.json(res?.data);
  } catch (error: any) {
    if (error) {
      return Response.json(error.payload, {
        status: error.status,
      });
    } else {
      return Response.json(
        {
          message: "Có lỗi xảy ra",
        },
        {
          status: 500,
        }
      );
    }
  }
}
